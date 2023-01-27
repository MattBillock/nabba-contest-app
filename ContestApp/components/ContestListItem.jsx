
export default function ContestSelector(props) {
  //const [contestList, setcontestList] = useState(props.contestList);
  const contestList = useSelector(selectContestList);
  const contestListStatus = useSelector(selectContestListStatus);
  const error = useSelector(state => state.contestList.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (contestListStatus === 'idle') {
      dispatch(fetchList())
    }
  }, [contestListStatus, dispatch])



  let content;
  if(contestListStatus === 'loading') {
    content = <Text>{"Loading!"}</Text>
  }
  else if(contestListStatus === 'succeeded') {
    content = contestList.map(contest => {
      return (
        <Card onPress={() => dispatch(selectSelectedContestId(contest.id))}>
          <Card.Content>
            <Title>{contest.name}</Title>
          </Card.Content>
        </Card>
      )
    })
  }
  else if(contestListStatus === 'failed') {
    content = <Text>{'error'}</Text>
  }

  return (
    <View>        
      {content}
    </View>
  );   
}