import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'

import { useCharacters } from '../../context/CharacterContext'
import { api } from '../../lib/axios'
import { Input } from '../Input'

import { Close, Content, Overlay, Portal, Root, Title, Trigger } from './styles'

interface AddCharacterProps {
  campaignId: string
}

export function AddCharacter({ campaignId }: AddCharacterProps) {
  const [name, setName] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [open, setOpen] = useState(false)

  const { fetchCharacters } = useCharacters()

  async function handleAddNewCharacter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!name) {
      return toast.info('Insira o nome do personagem')
    }

    if (!playerName) {
      return toast.info('Insira o nome do jogador')
    }

    console.log(campaignId, name, playerName)
    try {
      await api.post('character/new', {
        campaignId,
        name,
        playerName,
      })

      fetchCharacters(campaignId)
      toast.success('Novo personagem adicionado!')
      setName('')
      setPlayerName('')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        return toast.error(err.response.data.message)
      }
    } finally {
      setOpen(false)
    }
  }

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button>Adicionar Personagem</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Novo personagem</Title>
          <form onSubmit={handleAddNewCharacter}>
            <Input
              placeholder="Klunk"
              type="text"
              label="Nome"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              placeholder="Elton"
              type="text"
              label="Jogador"
              value={playerName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPlayerName(e.target.value)
              }
            />
            <button type="submit">Criar</button>
          </form>
          <Close>
            <IoMdClose />
          </Close>
        </Content>
      </Portal>
    </Root>
  )
}