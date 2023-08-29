import { fetchThreads } from "@/lib/actions/thread.actions"
import { currentUser } from "@clerk/nextjs"

export default async function Home() {
  const result = await fetchThreads(1, 30)
  const user = await currentUser()

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {}
      </section>
    </>
  )
}
