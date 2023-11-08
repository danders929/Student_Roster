import api from '../../store/api';

const getStudentsFromApi = api.injectEndpoints ({
    endpoints: (builder) => ({
        getStudents: builder.query({
            query:() => "/students",
            providesTags: ["Students"]
        }),
    }),
});

export const { 
    useGetStudentsQuery
} = getStudentsFromApi;