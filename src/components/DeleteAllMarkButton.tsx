import React from 'react'
import { Button } from '../styles/ButtonStyle'

interface DeleteAllMarkButtonProps {
   deleteAllChecked: () => void
}

const DeleteAllMarkButton = ({
   deleteAllChecked,
}: DeleteAllMarkButtonProps) => {
   return <Button onClick={deleteAllChecked}>Удалить все выполненные</Button>
}

export default DeleteAllMarkButton
