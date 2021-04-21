.experience-body {
    display: flex;
    z-index: -1;
    flex-direction: row;
    background: url($wave-g1), $green-light;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    border-radius: 30px;
    width: 1300px;
    height: 450px;

    .experience-list {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;

      .experience-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 25px;
        font-weight: bold;

       
        .company-item {
          display: flex;
          flex-direction: column;
          .company-name {
            color: $grey-light;
          }
          .company-position {
            color: $grey-dark;
            font-size: 20px;
            font-weight: normal;
          }
        }
      }
    }

    .experience-image {
      display: flex;
      width: 30%;
      align-content: flex-end;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 190px;
        height: 190px;
      }
    }
  }