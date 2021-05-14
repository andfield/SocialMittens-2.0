import {useEffect} from 'react'

function NotFound() {
    
    useEffect(() => {
        document.title = 'Page Not Found!'
    }, [])

    return (
        <div className="bg-gray-background">
          <div className="mx-auto max-w-screen-lg"  >
              <p className="text-center text-2xl">Page Not Found</p>
          </div>
        </div>
    )
}

export default NotFound
