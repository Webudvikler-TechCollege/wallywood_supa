import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useEffect, useState } from "react"

export const LoginPage = () => {
  const { supabase } = useSupabase()
  const [session, setSession] = useState(null)

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
      // Redirect or perform any additional actions after logout
    } catch (error) {
      console.error("Error logging out:", error.message)
    }
  }

  useEffect(() => {

    supabase?.auth?.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    if (supabase && supabase.auth) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
	})
      return () => subscription.unsubscribe()
    }
  }, [supabase])

  if (!session) {
    return (
      <ContentWrapper title="Login" description="Login to the site">
        {supabase && (
          <Auth 
            supabaseClient={supabase} 
            appearance={{ theme: ThemeSupa }} 
            providers={["github", "apple", "google"]}
          />
        )}
      </ContentWrapper>
    )
  } else {
    return (
      <ContentWrapper title="Logged in">
        <p>Du er logget ind som {session.user.email}</p>
        <button onClick={handleLogout}>Log af</button>
      </ContentWrapper>
    )
  }
}
