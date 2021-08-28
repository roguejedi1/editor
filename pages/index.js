import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import {Formik, Form, useFormik} from "formik"
import axios from "axios"

axios.defaults.withCredentials = true;

const Editor = dynamic(import ('../components/Editor'), {ssr: false})

export default function Home() {
  return (
    <div id="codex-editor">
    <Formik
        initialValues={{
          codex: ""
        }}
        onSubmit={async (values) => {
          console.log('values', values)
        }}
    >
      <Form>
        <Editor name="codex"/>
        <button>Save data</button>
      </Form>
    </Formik>
    </div>
  )
}