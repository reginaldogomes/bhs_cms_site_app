import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import InputField from "@/components/form/InputField"
import TextareaField from "@/components/form/TextareaField"

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const methods = useForm<ContactFormValues>()

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-white mx-auto mt-8 w-full max-w-lg rounded-lg p-8 shadow-md"
      >
        <InputField name="name" label="Name" required />
        <InputField name="email" label="Email" type="email" required />
        <TextareaField name="message" label="Message" required />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:bg-blue-700 text-white focus:shadow-outline rounded bg-accent-500 px-4 py-2 font-bold focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ContactForm
