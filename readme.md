# LINK PARA API

https://lectures-api.herokuapp.com/

## Endpoints

### Lectures

    @get /lectures
    - Retorna uma lista com todas as lectures

    @get /lectures/:id
    - Retorna a lecture pelo id

    @get/lectures/busca?campus=<nome-do-campus>
    - Retorna uma lista de lectures filtrada pelo campus

    @post /lectures
    - Adiciona uma nova lecture
        Lecture = {
            lecture: String required,
            teacher: teacherId required,
            campus:  String required,
            credits: Number required
        }

    @put /lectures/:id
    - Modifica uma lecture pelo id

    @delete /lectures/:id
    - Deleta uma lecture pelo id

### Teachers

    @get /teachers
    - Retorna uma lista com todas os professores

    @get /teachers/:id
    - Retorna o professor pelo id

    @post /teachers
    - Adiciona uma novo professor
        Teacher = {
            name: String required,
            email:  String required,
        }

    @put /teachers/:id
    - Modifica um professor pelo id

    @delete /teachers/:id
    - Deleta um professor pelo id
