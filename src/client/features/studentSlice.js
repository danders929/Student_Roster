import api from "../store/api";

const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"]
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
      invalidatesTags: ["Students"]
    }), 

    updateStudent: builder.mutation({
      query: (studentData) => ({
        url: `/students/${studentData.id}`,
        method: "PATCH",
        body: studentData,
      }),
      invalidatesTags: ["Students"]
    }),

    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"]
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
//added student slice