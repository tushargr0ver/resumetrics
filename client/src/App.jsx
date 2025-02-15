import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "@/components/ui/file-upload"
import { Alert, Spinner } from "@chakra-ui/react"
import { DataList } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"

function App() {
  const API_URL = import.meta.env.VITE_API_URL
 
  const [isloading, setLoading] = useState('none')
  const [items, setItems] = useState([
    {label: "Score", value: "-"},
    {label: "Feedback", value: "-"},
    {label: "Suggestions", value: "-"}
  ])

  const handleFileUpload = async(event)=>{
    setLoading('')
    const file = event.target.files
    if (file.length === 0) return;
    const formData = new FormData()
    formData.append('file',file[0])
    try{
      const response = await axios.post(API_URL, formData, {
        headers:{
          'Content-Type': 'application/pdf'
        }
      })
      if(response.data.isResume){
        setItems([
        {label: "Score", value: response.data.score},
        {label: "Feedback", value: response.data.feedback},
        {label: "Suggestions", value: response.data.suggestions}
        ])
      }
      else{
        setItems([
          {label: "Error", value: "Uploaded file is not valid, please try again"},
          ])
      }
      
    }
    catch(error){
      console.error('Failed', error.message)

    }
    setLoading('none')

  
  }

  return (

    <>
    <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={1} accept={["application/pdf"]} onChange={handleFileUpload}>
      <FileUploadDropzone
        label="Drag and drop your resume"
        description=".pdf file only"
      />
      <FileUploadList />
    </FileUploadRoot >
    <Alert.Root display={isloading} 
      borderStartWidth="3px"
      borderStartColor="colorPalette.600"
      title="We are loading something"
    >
      <Alert.Indicator >
        <Spinner size="sm" />
      </Alert.Indicator>
      <Alert.Title>Analyzing your resume</Alert.Title>
    </Alert.Root>
    <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
      {items.map((item) => (
        <DataList.Item key={item.label} pt="4">
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>


    </>
    
  )

}

export default App


