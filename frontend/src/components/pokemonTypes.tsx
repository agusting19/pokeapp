import { Type } from "@/types/app"
import { textTransform } from "@/utils"

interface Props {
  types: Type[]
  textXl?: boolean
}

const PokemonTypes = ({ types, textXl }: Props) => {
  const fontSize = textXl ? "text-2xl" : "text-sm"

  return (
    <div
      className={`flex text-zinc-700 gap-2 justify-center font-semibold ${fontSize}`}
    >
      {types.map((item, index) => (
        <p key={index}>
          {index > 0 && "/ "}
          {textTransform(item.type.name)}
        </p>
      ))}
    </div>
  )
}

export default PokemonTypes
