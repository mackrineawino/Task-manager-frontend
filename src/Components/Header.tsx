type Props={
  user:{
    username: string
    password: string
  }
  setUser: React.Dispatch<React.SetStateAction<null>>
  onLogout: React.Dispatch<React.SetStateAction<null>>
}

const Header: React.FC<Props> = (user, setUser) => {
  return (
    <div>
     
    </div>
  )
}

export default Header
