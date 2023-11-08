import api from "../../store/api";

const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getStudents: builder.query({
      query: () => "/students",
    }),


    getStudentById: builder.query({
      query: (id) => `/students/${id}`,
    }),


    createStudent: builder.mutation({
      query: (studentData) => ({
        url: "/students",
        method: "POST",
        body: studentData,
      }),
    }),


    updateStudent: builder.mutation({
      query: (studentData) => ({
        url: `/students/${studentData.id}`,
        method: "PATCH",
        body: studentData,
      }),
    }),

  
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;
