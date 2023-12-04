import { FC } from "react"

interface ProfileIconAttributes {
  className?: string
}

const ProfileIcon: FC<ProfileIconAttributes> = ({
  className = "",
}: ProfileIconAttributes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className="className"
    >
      <image href="/favicons/pineapple.png" x="5" y="5" width="30" height="43" />
    </svg>
  )
}

export default ProfileIcon
