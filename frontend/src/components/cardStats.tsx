import { Stat } from "@/types/app"

interface Props {
  stats: Stat[]
}

const CardStats = ({ stats }: Props) => {
  const textStyles = `text-white px-2 py-1 rounded-md font-medium`

  return (
    <section className="text-center">
      <h3 className="font-bold text-base">Base Stats</h3>
      <div className="text-sm py-1 flex justify-center space-x-4">
        <ul className="text-left space-y-1">
          <li className={`bg-red-500 ${textStyles}`}>
            HP: {stats[0].base_stat}
          </li>
          <li className={`bg-gray-500 ${textStyles}`}>
            Attack: {stats[1].base_stat}
          </li>
          <li className={`bg-orange-500 ${textStyles}`}>
            Defense: {stats[2].base_stat}
          </li>
        </ul>
        <ul className="text-left space-y-1">
          <li className={`bg-cyan-500 ${textStyles}`}>
            Sp. Atk: {stats[3].base_stat}
          </li>
          <li className={`bg-lime-500 ${textStyles}`}>
            Sp. Def: {stats[4].base_stat}
          </li>
          <li className={`bg-violet-500 ${textStyles}`}>
            Speed: {stats[5].base_stat}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CardStats
