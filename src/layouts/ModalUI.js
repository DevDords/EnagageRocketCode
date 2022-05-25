import Card from './Card';
import Button from './Button';
import classes from './ModalUI.module.css';
const ModalUI = (props) => {
  return (
    <Card className={classes.Modal}>
      <header className={classes.Header}>
        <h2>Profile</h2>
      </header>
      <img
        className={classes.Avatar}
        src={props.user.avatar}
        alt='User Avatar'
      />

      <div className={classes.Content}>
        <div className={classes.Titles}>
          <p>ID:</p>
          <p>First Name:</p>
          <p>Last Name:</p>
          <p>Email:</p>
        </div>
        <div className={classes.Contents}>
          <p>{props.user.id}</p>
          <p>{props.user.first_name}</p>
          <p>{props.user.last_name}</p>
          <p>{props.user.email}</p>
        </div>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onClear}>{props.btnMessage}</Button>
      </footer>
    </Card>
  );
};
export default ModalUI;
