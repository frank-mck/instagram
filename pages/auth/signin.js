import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser...
function signIn({ providers }) {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] py-2 -mt-35 px-14 text-center">

        <img className="w-80" src ='https://links.papareact.com/ocw' alt='logo' />
        <p className="font-xs italic">This is not a real app, it is built for educational purposes only</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div className="p-3 bg-blue-500 text-white rounded-lg" key={provider.name} >
              <button onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'}) }>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

// Serverside render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }
  }
}
export default signIn