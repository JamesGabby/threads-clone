import { fetchUserThreads } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

interface Props {
  currentUserId: string, 
  accountId: string, 
  accountType: string
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result = await fetchUserThreads(accountId)

  if (!result) redirect('/')
  return (
    <div>ThreadsTab</div>
  )
}

export default ThreadsTab