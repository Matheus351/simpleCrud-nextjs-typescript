import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
   
  const clients = [
    new Client('Ana',34,'1'),
    new Client('Bia',27,'2'),
    new Client('Carlos',21,'3'),
    new Client('Pedro',30,'4'),
  ]

  return (
    <div className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Simple Crud">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
