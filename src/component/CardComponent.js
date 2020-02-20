import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Avatar,
  CardMedia,
  CircularProgress,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  Chip
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

const CardComponent = ({ pokemon }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} sm={12}>
        <Avatar
          alt="Pokemon"
          src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png"
          className={classes.large}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h5">Pokédex</Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        {pokemon.imageUrl ? (
          <Card style={{ minWidth: 345 }}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  src={pokemon.imageUrl}
                  component="img"
                  style={{ margin: 5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="h5">{pokemon.name}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography>
                      {`${'Supertype: '} ${pokemon.supertype}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography>
                      {`${'Evolves From: '} ${pokemon.evolvesFrom}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography>{`${'Rarity: '} ${pokemon.rarity}`}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography>{`${'Hp: '} ${pokemon.hp}`}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography>Attacks:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    {pokemon.attacks &&
                      pokemon.attacks.map((attack, index) => (
                        <Chip
                          key={index}
                          label={`${attack.name} ${attack.damage}`}
                          color="primary"
                        />
                      ))}
                  </Grid>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={12}>
                <CardActions disableSpacing>
                  <Grid item xs={9} sm={10} />
                  <Grid item xs={3} sm={1}>
                    <Button variant="outlined" href="/">
                      Home
                    </Button>
                  </Grid>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Grid>
  );
};

export default CardComponent;
