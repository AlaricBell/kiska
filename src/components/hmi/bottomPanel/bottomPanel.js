import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./bottomPanel.scss";
import { PanelItem } from "./panelItem";
import {produce} from "immer"
import {motion, AnimatePresence} from 'framer-motion'

/* Place your code in this component and the related scss file */

export const BottomPanel = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [selected, setSelected] = useState(0)
  const [rooms, setRooms] = useState([
    {name: "Bedroom", active: false, disabled: false},
    {name: "Kitchen", active: false, disabled: false},
    {name: "Hallway", active: false, disabled: false},
    {name: "Living room", active: false, disabled: true},
  ])

  const handleSwitch = useCallback((index) => {
    setRooms(produce(rooms, draft => {
      draft[index].active = !draft[index].active
  }))
  }, [rooms])

  const handleInteraction = useCallback((event) => {
    if (isMenuVisible && event.key === 'Enter') {
        setRooms(produce(rooms, draft => {
          draft[selected].active = !draft[selected].active
      }))
    }

    if (event.key === 'Escape') {
      setIsMenuVisible(prev => !prev)
    }

    if (isMenuVisible && event.key === 'ArrowUp') {
      // TODO: Can be less complicated
      const availableRoom = rooms.slice().reverse().find((room, index) => rooms.length - index - 1 < selected && !room.disabled);
      if(availableRoom) setSelected(rooms.indexOf(availableRoom))
    }

    if (isMenuVisible && event.key === 'ArrowDown' ) {
      const availableRoom = rooms.find((room, index) => index > selected && !room.disabled);
      if(availableRoom) setSelected(rooms.indexOf(availableRoom))
    }
  }, [rooms, selected, isMenuVisible])

  useEffect(() => {
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('keydown', handleInteraction);
    }
  }, [rooms, selected, isMenuVisible])

  return <>
    <AnimatePresence>
      {isMenuVisible && <section className="bottom-panel-overlay">
        <motion.div className="bottom-panel" 
            transition={{ duration: 0.5 }}
            initial={{ translateY: 800 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 800 }}>
            {rooms.map((room, index) => <PanelItem key={index} room={room} selected={selected === index} disabled={room.disabled} onClick={() => handleSwitch(index)}/>)}
        </motion.div>
      </section>}
    </AnimatePresence>
  </>
};
