import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';



const LottoDetail = (props) =>{
  const prizeData = [
    {
      grade: 1,
      winners: 8,
      prize: 2638313235,
    },

    {
      grade: 2,
      winners: 56,
      prize: 62840792,
    },

    {
      grade: 3,
      winners: 3240,
      prize: 1086138,
    },

    {
      grade: 4,
      winners: 137051,
      prize: 50000,
    },

    {
      grade: 5,
      winners: 2005739,
      prize: 5000,
    },
  ];

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Grid>
          {
            prizeData.map((item, index) => {

              return (
                <Row style={styles.detailRow}>
                  <Col style={styles.gradeCol}>
                    <Text style={styles.gradeText}>{ numberWithCommas(item.grade) }등</Text>
                  </Col>
                  <Col style={styles.winnersCol}>
                    <Text style={styles.winnersText}>{ numberWithCommas(item.winners)}명</Text>
                  </Col>
                  <Col style={styles.prizeCol}>
                    <Text style={styles.prizeText}>{ numberWithCommas(item.prize) }명</Text>
                  </Col>
                </Row>
              )
            })
          }
        </Grid>
      </View>
    </View>
  )
};

const mapStateToProps = ({}) =>{
  return {}
};

export default connect(
  mapStateToProps,
  {}
)(LottoDetail);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },

  detailContainer: {

    width: '100%',
    height: 146
  },

  detailRow: {

  },

  gradeCol: {
    width: '15%',
    alignItems: 'center'
  },

  winnersCol: {
    width: '30%',
    alignItems: 'flex-end',
  },

  prizeCol: {
    width: '50%',
    alignItems: 'flex-end'
  },


  gradeText: {
    color: "#84dd84"
  },

  winnersText: {
    color: "#74798a"
  },

  prizeText: {
    color: "#2157f3"
  }
});
