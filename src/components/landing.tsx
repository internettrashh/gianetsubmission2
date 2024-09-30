import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { MessageSquare, AlertTriangle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col justify-center items-center p-4">
      <main className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-white">SBF Chat</h1>
        <p className="text-xl text-gray-100">
          Engage in a simulated conversation with Sam Bankman-Fried
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/chat">
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-2 rounded-md flex items-center space-x-2 transition-colors duration-300">
              <MessageSquare className="h-5 w-5" />
              <span>Start Chat</span>
            </Button>
          </Link>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-md p-4 text-white">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <p className="font-medium">Disclaimer</p>
          </div>
          <p className="mt-2 text-sm">
            This is a simulated chat for educational purposes only. The responses do not reflect real-time information or actual statements from Sam Bankman-Fried.
          </p>
        </div>
      </main>
      <footer className="mt-8 text-center text-white text-sm">
        <p>Powered by Gaianet decentralized AI nodes</p>
        <p className="mt-1">For educational and entertainment purposes only</p>
      </footer>
    </div>
  )
}

