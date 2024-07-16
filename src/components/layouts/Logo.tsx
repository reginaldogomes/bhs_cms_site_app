import Image from 'next/image'

const logo = '/logo_reginaldo_gomes.svg'
const logoIcon = '/logo_icon_reginado_gomes.svg'

export const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        alt="Reginaldo Gomes - Tecnologia e Inovação"
        width={300} // Largura da imagem
        height={30} // Altura da imagem
        className="sm:hidden"
      />
      <Image
        src={logoIcon}
        alt="Reginaldo Gomes - Tecnologia e Inovação"
        width={143} // Largura da imagem
        height={143} // Altura da imagem
      />
    </>
  )
}
