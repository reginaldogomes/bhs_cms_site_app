import { useForm, FormProvider } from 'react-hook-form'
import InputField from '@/components/form/InputField'
import TextareaField from '@/components/form/TextareaField'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const methods = useForm<ContactFormValues>()

  const onSubmit = (data: ContactFormValues) => {
    alert(JSON.stringify(data))
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-md"
      >
        <InputField name="name" label="Name" required />
        <InputField name="email" label="Email" type="email" required />
        <TextareaField name="message" label="Message" required />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ContactForm
