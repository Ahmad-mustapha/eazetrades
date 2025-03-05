import React from 'react'

const Signup = () => {
  const [ showSignup, setShowSignup ] = useState(false)
  useEffect(() => {
    if (showSignup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSignup]);
  return (
    <div>Signup</div>
  )
}

export default Signup