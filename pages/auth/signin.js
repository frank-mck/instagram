import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser...
function signIn({ providers }) {
  return (
    <div>
      <h1>dsvsfds</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} >
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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