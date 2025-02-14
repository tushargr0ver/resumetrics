import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "@/components/ui/file-upload"
import { Alert, Spinner } from "@chakra-ui/react"
import { DataList } from "@chakra-ui/react"

function App() {
  return (
    <>
    <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={1} accept={["application/pdf"]}>
      <FileUploadDropzone
        label="Drag and drop your resume"
        description=".pdf file only"
      />
      <FileUploadList />
    </FileUploadRoot>
    <Alert.Root
      borderStartWidth="3px"
      borderStartColor="colorPalette.600"
      title="We are loading something"
    >
      <Alert.Indicator>
        <Spinner size="sm" />
      </Alert.Indicator>
      <Alert.Title>Analyzing your file</Alert.Title>
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

const items = [
  { label: "Score", value: "Upload resume first" },
  { label: "Feedback", value: "Upload resume first" },
  { label: "Suggestions", value: "Upload resume first" }
]
