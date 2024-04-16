import { Stat } from "@/types/app"

interface Props {
  stats: Stat[]
}

const StatsList = ({ stats }: Props) => {
  return (
    <ul className="text-left flex flex-col md:flex-row md:m-auto py-4 gap-2">
      <li className={`bg-red-500 text-white px-2 py-1 rounded-md font-medium`}>
        HP: {stats[0].base_stat}
      </li>
      <li className={`bg-gray-500 text-white px-2 py-1 rounded-md font-medium`}>
        Attack: {stats[1].base_stat}
      </li>
      <li
        className={`bg-orange-500 text-white px-2 py-1 rounded-md font-medium`}
      >
        Defense: {stats[2].base_stat}
      </li>
      <li className={`bg-cyan-500 text-white px-2 py-1 rounded-md font-medium`}>
        Sp. Atk: {stats[3].base_stat}
      </li>
      <li className={`bg-lime-500 text-white px-2 py-1 rounded-md font-medium`}>
        Sp. Def: {stats[4].base_stat}
      </li>
      <li
        className={`bg-violet-500 text-white px-2 py-1 rounded-md font-medium`}
      >
        Speed: {stats[5].base_stat}
      </li>
    </ul>
  )
}

export default StatsList
