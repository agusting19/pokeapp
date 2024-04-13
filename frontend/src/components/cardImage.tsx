import Image from "next/image"

interface Props {
  imageUrl: string
  name: string
}

const CardImage = ({ imageUrl, name }: Props) => {
  return (
    <Image
      src={imageUrl}
      alt={name}
      width={200}
      height={200}
      className="w-32 h-32 m-auto"
    />
  )
}

export default CardImage
