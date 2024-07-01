import Image from 'next/image'

const logo = '/reginaldo_gomes.svg'

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Descrição da imagem"
      width={240} // Largura da imagem
      height={10} // Altura da imagem
    />
  )
}
