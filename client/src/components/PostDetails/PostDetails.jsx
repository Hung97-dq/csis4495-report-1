import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Breadcrumbs, Link, Box } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import HomeIcon from '@material-ui/icons/Home';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const credit = useSelector((state) => state);
  console.log(credit);
  console.log("post:",post,"posts:", posts,"isLoading", isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id, memberid } = useParams();
  console.log(id);
  console.log(memberid);

  useEffect(() => {
    dispatch(getPost(id,memberid));
  }, [id,memberid]);


  if (!post) return null;


  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/posts" >
    Home
  </Link>
  <Typography color="textPrimary">{post.data[0].memberID}</Typography>
</Breadcrumbs>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">MenberID: {post.data[0].memberID}</Typography>
          <Typography variant="h4" component="h3">Loan Detail:</Typography>
          {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
          <Typography variant="body" color="textSecondary" component="h5">{post.data[0].loanAmount? `Loan Amount: $${post.data[0].loanAmount}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[0].interestRate? `Interest Rate: ${post.data[0].interestRate}%` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[0].loanLength? `Loan Length: ${post.data[0].loanLength} months` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[0].loanGrade? `Loan Grade: ${post.data[0].loanGrade}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[0].loanPurpose? `Loan Amount: ${post.data[0].loanPurpose}` : ''} </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{post.data[0].name? `Created by: ${post.data[0].name}` : ''} </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{post.data[0].createdAt? `Created time: ${post.data[0].createdAt.split('T')[0]}` : ''} </Typography>
          
          {post?.data[1]? 
          <>
          <Typography variant="h4" component="h3">Member Profile:</Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].home_ownership? `Home Ownership: ${post.data[1].home_ownership}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].emp_title? `Job Title: ${post.data[1].emp_title}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].emp_length? `Employment Length: ${post.data[1].emp_length}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].annual_inc? `Gross annual income: $${post.data[1].annual_inc}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].dti? `Debt-to-income (DTI): ${post.data[1].dti}%` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].addr_state? `State Location: ${post.data[1].addr_state}` : ''} </Typography>
          
          <Typography variant="h4" component="h3">Member Credit History:</Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].fico_range_low && post.data[1].fico_range_high? `Credit Score Range: ${post.data[1].fico_range_low} - ${post.data[1].fico_range_high} ` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].earliest_cr_line? `Earliest Credit Line: ${post.data[1].earliest_cr_line}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].open_acc? `Open Credit Line: ${post.data[1].open_acc}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].total_acc? `Total Credit Line: ${post.data[1].total_acc}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_bal? `Revolving Credit Balance: $${post.data[1].revol_bal}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Revolving Line Utilization: ${post.data[1].revol_util}%` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Accounts now Delinquents: ${post.data[1].acc_now_delinq}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Delinquent Amount: $${post.data[1].delinq_amnt}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Delinquencies (Last 2 years): ${post.data[1].delinq_2yrs}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].mths_since_last_delinq? `Months since last Deliquency: ${post.data[1].mths_since_last_delinq} months` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Public Record on Fire: ${post.data[1].pub_rec}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].mths_since_last_record? `Months since last Record: ${post.data[1].mths_since_last_record}` : ''} </Typography>
          <Typography variant="body" color="textSecondary" component="h5">{post.data[1].revol_util? `Collections Excluding Medical: $${post.data[1].collections_12_mths_ex_med}` : ''} </Typography>
          </>
          : <Typography variant="h4" component="h3">The member does not have previous historical data</Typography>}
          
          <Divider style={{ margin: '20px 0' }} />
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection post={post.data[0]} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
        <Box display={{ xs: 'block', sm: 'none' }} bgcolor="text.disabled" className={classes.homeBox}><Link href="/posts" ><HomeIcon className={classes.homeIcon}></HomeIcon></Link></Box>
      </div>
      
    </Paper>
    
  );
};

export default Post;