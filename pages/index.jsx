import { getSession } from 'next-auth/react'

import { prisma } from '@lib/db'
import Layout from '@components/layout'

export default function App({ user }) {
  const firstName = user.name.split(',')[1].split(' ')[1]
  return (
    <Layout user={user}>
      <section className="w-full h-full flex flex-col font-bold bg-gray-50 text-gray-800 items-center justify-center space-y-5">
        <h1 className="text-3xl">
          hello<span className="text-red-800"> {firstName}</span>!
        </h1>
        <h2 className="text-xl">role: {user.role}</h2>
        <h3 className="text-xl">email: {user.email}</h3>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ params, req, res }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/landing',
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  return {
    props: {
      user,
    },
  }
}
