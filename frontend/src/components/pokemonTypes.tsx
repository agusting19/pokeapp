import { Type } from "@/types/app"
import { textTransform } from "@/utils"

interface Props {
  types: Type[]
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <div className="flex text-sm text-zinc-700 gap-2 justify-center font-semibold">
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
