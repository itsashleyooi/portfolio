import Link from "next/link"
import { ProfileIcon } from "@/icons"

const Logo = () => {
  return (
    <>
      <Link href="/" className="group mr-4 flex items-center">
        <div className="ml-2 font-calsans text-lg text-gray-600 dark:text-slate-400">
          Ashley Ooi Y.L. 
        </div>
      </Link>
    </>
  )
}
export default Logo
