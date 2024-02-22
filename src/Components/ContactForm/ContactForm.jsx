import { useForm } from "react-hook-form"
import { ContactFormContainer } from "./ContactForm.style"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import { Link } from "react-router-dom"
import { FormContainer } from "../../Styled/Form.style"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { supabase } = useSupabase()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (formdata) => {
    const { data, error } = await supabase.from("contact").insert([
      {
        firstname: formdata.firstname,
        lastname: formdata.lastname,
        email: formdata.email,
        phone: formdata.phone,
        comment: formdata.comment,
      },
    ])
    if (error) {
      console.error("Fejl: kunne ikke tilføje kontakt", error)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <ContentWrapper title="Tak for din henvendelse.">
        <p>
          Vi tilstræber at besvare din henvendelse inden for to arbejdsdage.
        </p>
        <p>
          Med venlig hilsen
          <br />
          Wallywood staff
        </p>
        <p>
          <Link to="/">Gå til forsiden</Link>
        </p>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper
      title="Kontakt os"
      subtitle="Udfyld nedenstående formular og send"
    >
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">Fornavn:</label>
          <input
            type="text"
            id="firstname"
            placeholder="Indtast fornavn"
            {...register("firstname", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="lastname">Efternavn:</label>
          <input
            type="text"
            id="lastname"
            placeholder="Indtast efternavn"
            {...register("lastname", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Indtast email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefon:</label>
          <input
            type="text"
            id="phone"
            placeholder="Indtast telefonnummer"
            {...register("phone", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="comment">Besked:</label>
          <textarea
            id="comment"
            placeholder="Indtast besked"
            {...register("comment", { required: true })}
          ></textarea>
        </div>
        <button type="submit">Send</button>
        <button type="reset">Nulstil felter</button>
      </FormContainer>
    </ContentWrapper>
  )
}
