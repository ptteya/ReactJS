import { useState, useEffect } from 'react';

import * as userService from '../../services/userService';

import { UserActions } from "./UserSectionConstants";
import { UserItem } from "./UserItem.js/UserItem";
import { UserDetails } from "./UserDetails/userDetails";
import { UserEdit } from "./UserEdit/UserEdit";
import { UserDelete } from "./UserDelete/UserDelete";
import { UserCreate } from './UserCreate/UserCreate';

export const UserSection = () => {
  const [users, setUsers] = useState([]);
  const [userAction, setUserAction] = useState({ user: null, action: null });

  useEffect(() => {
    userService.getAll()
      .then(users => setUsers(users));
  }, []);

  const userActionClickHandler = (userId, actionType) => {
    userService.getOne(userId)
      .then(user => {
        setUserAction({
          user: user,
          action: actionType
        });
      });
  }

  const createUserOpenHandler = () => {
    setUserAction({
      action: UserActions.Add
    });
  }

  const closeHandler = () => {
    setUserAction({ user: null, action: null });
  }

  const userCreateHandler = (userData) => {
    userService.create(userData)
      .then(user => {
        setUsers(oldUsers => [...oldUsers, user]);
        closeHandler();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const userEditHandler = (userId, userData) => {
    userService.edit(userId, userData)
      .then(user => {
        setUsers(oldUsers => [...oldUsers.map(x => x._id !== userId ? x : user)]);
        closeHandler()
      })
  }

  const userDeleteHandler = (userId) => {
    userService.deleteUser(userId)
      .then(user => {
        setUsers(oldUsers => [...oldUsers.filter(x => x._id !== userId)]);
        closeHandler();
      })
  }

  return (
    <>
      <div className="table-wrapper">

        {/* Overlap Components */}

        {userAction.action === UserActions.Details &&
          <UserDetails
            user={userAction.user}
            onClose={closeHandler}
          />
        }

        {userAction.action === UserActions.Edit &&
          <UserEdit
            user={userAction.user}
            onClose={closeHandler}
            onUserEdit={userEditHandler}
          />
        }

        {userAction.action === UserActions.Delete &&
          <UserDelete
            user={userAction.user}
            onClose={closeHandler}
            onUserDelete={() => userDeleteHandler(userAction.user._id)}
          />
        }

        {userAction.action === UserActions.Add &&
          <UserCreate
            onClose={closeHandler}
            onUserCreate={userCreateHandler}
          />
        }

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>
              <tr key={user._id}>
                <UserItem
                  user={user}
                  onActionClick={userActionClickHandler}
                />
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button className="btn-add btn" onClick={createUserOpenHandler}>Add new user</button>
    </>
  );
}