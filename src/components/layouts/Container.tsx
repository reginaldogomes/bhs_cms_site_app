// components/Container.tsx
interface ContainerProps {
  children: React.ReactNode
  variant?: "fullwidth" | "1280"
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>
}

export default Container
