import Image from 'next/image'

const logo = '/logo_reginaldo_gomes.svg'

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Reginaldo Gomes - Tecnologia e Inovação"
      width={300} // Largura da imagem
      height={30} // Altura da imagem
    />
  )
}
