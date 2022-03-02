import React from 'react'
import { Button } from '../styles/ButtonStyle'

interface MarkAllButtonProsp {
   markAllTasks: () => void
}

const MarkAllButton = ({ markAllTasks }: MarkAllButtonProsp) => {
   return <Button onClick={markAllTasks}>Отметить всё как выполнено</Button>
}

export default MarkAllButton
