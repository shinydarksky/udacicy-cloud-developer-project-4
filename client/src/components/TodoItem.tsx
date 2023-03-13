import { Button, Checkbox, Divider, Grid, Icon, Image } from 'semantic-ui-react';

export default function TodoItem({todos,onTodoDelete, onEditButtonClick,onTodoCheck}:any) {

    function onClickDelete(id:any,createdAt:any){
        const confirm = window.confirm("Are you sure delete?");
        if(confirm)
            onTodoDelete(id,createdAt)
    }

    return (
        <Grid padded>
            {todos.map((todo:any, pos:any) => {
                return (
                    <Grid.Row key={todo.todoId}>
                        <Grid.Column width={1} verticalAlign="middle">
                            <Checkbox onChange={() => onTodoCheck(pos)} checked={todo.done} />
                        </Grid.Column>
                        <Grid.Column width={10} verticalAlign="middle">
                            {todo.name}
                        </Grid.Column>
                        <Grid.Column width={3} floated="right">
                            {todo.dueDate}
                        </Grid.Column>
                        <Grid.Column width={1} floated="right">
                            <Button icon color="blue" onClick={() => onEditButtonClick(todo.todoId)}>
                                <Icon name="pencil" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={1} floated="right">
                            <Button
                                icon
                                color="red"
                                onClick={() => onClickDelete(todo.todoId, todo.createdAt)}
                            >
                                <Icon name="delete" />
                            </Button>
                        </Grid.Column>
                        {todo.attachmentUrl && <Image src={todo.attachmentUrl} size="small" wrapped />}
                        <Grid.Column width={16}>
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                );
            })}
        </Grid>
    )
}