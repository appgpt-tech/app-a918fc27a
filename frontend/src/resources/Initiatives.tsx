//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const InitiativesTitle = () => {
  const record = useRecordContext();
  return <span>Initiatives {record ? `"${record.name}"` : ''}</span>;
};

export const InitiativesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="startDate" />
      <DateField source="endDate" />
      <ReferenceField source="relatedDepartment" reference="Departments" />
      <TextField source="status" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const InitiativesEdit = () => (
  <Edit title={<InitiativesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="startDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="endDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedDepartment" reference="Departments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const InitiativesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="startDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="endDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedDepartment" reference="Departments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="relatedDepartment"
    label="relatedDepartment"
    reference="Departments"
    alwaysOn
  />,
  ,
];
