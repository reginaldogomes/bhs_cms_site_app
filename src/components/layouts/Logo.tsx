import Image from "next/image"
import Link from "next/link"

const logoImg = "/logo_reginaldo_gomes.svg"
const logoIcon = "/logo_icon_reginado_gomes.svg"

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={logoImg}
          alt="Reginaldo Gomes - Tecnologia e Inovação"
          width={300} // Largura da imagem
          height={30} // Altura da imagem
          className="hidden md:block"
        />
        <Image
          src={logoIcon}
          alt="Reginaldo Gomes - Tecnologia e Inovação"
          width={73} // Largura da imagem
          height={73} // Altura da imagem
          className="block md:hidden"
        />
      </Link>
    </>
  )
}
