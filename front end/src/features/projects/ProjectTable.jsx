
// import useOwnerProject from "./useOwnerProjects";
// import Loading from '../../ui/Loading';
// import Empty from "../../ui/Empty";
// import { space } from "postcss/lib/list";
// import  ProjectRow  from "./ProjectRow";
// import Table, { TableBody } from "../../ui/Table";
// function ProjectTable() {
//  const {projects , isLoading} = useOwnerProject()
//  if (isLoading) return <Loading/>;
//  if (!projects.length) return <Empty resourceName="پروژه" />;

//   return (
//    <Table>
//      <Table.Header>
//          <th>#</th>
//          <th>عنوان پروژه</th>
//          <th>دسته بندی</th>
//          <th>بودجه</th>         <th>ددلاین</th>
//          <th>تگ ها</th>
//          <th>فریلنسر</th>
//          <th>وضعیت</th>
//          <th>عملیات</th>
  
//        </Table.Header>
//           <TableBody>
//           {projects.map((projects , index)=>(
          
//           <ProjectRow key={projects._id} projects={projects} index={index} />
          
       
//         ))}
//       </TableBody>
//    </Table>
//   );
// }

// export default ProjectTable;















import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectTable;
