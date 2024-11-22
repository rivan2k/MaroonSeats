import classes from './Pages.module.css';
import { Title, Stack, MultiSelect, Slider, Group, SimpleGrid } from '@mantine/core';

function Passes() {
  return (
    <div className={classes.container}>
      <Stack className={classes.stack}>
        <Title className={classes.title}>Passes</Title>

        <Group>
          <MultiSelect
            placeholder='Year'
            data={['Freshmen', 'Sophomore', 'Junior', 'Senior']}
            className={classes.multiselect}
          />

          <Slider
            min={0}
            max={800}
            defaultValue={50}
            labelTransitionProps={{
              transition: 'skew-down',
              duration: 150,
              timingFunction: 'linear',
            }}
            className={classes.slider}
          />
        </Group>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </SimpleGrid>
      </Stack>
    </div>
  )
}

export default Passes