import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getUserData, getIsLoading, getError } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { user, isLoading, error } = this.props;

    if (isLoading) return <p>Загрузка данных о пользователе ...</p>
    if (error) return <p>{error}</p>
    if (!user || user.message === 'Not Found') return <p className="t-no-user-info">Нет информации о пользователе</p>

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={user.avatar_url} alt="user info"/>
        </div>
        <div>
          <p className="t-user-name">{user.name}</p>
        </div>
        {/* Отобразите данные о пользователе */}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  user: getUserData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
}))(UserInfo);
