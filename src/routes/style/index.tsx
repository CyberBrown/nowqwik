import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  badgeVariants,
  Breadcrumb,
  Button,
  buttonVariants,
  Card,
  Carousel,
  Checkbox,
  Collapsible,
  Combobox,
  Dropdown,
  Input,
  Label,
  Modal,
  Popover,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Tabs,
  Textarea,
  Toggle,
  ToggleGroup,
  Tooltip,
} from "~/components/ui";
import { LuChevronDown } from "@qwikest/icons/lucide";

export default component$(() => {
  const checked = useSignal(false);
  const isModalVisible = useSignal(false);
  const isPopoverOpen = useSignal(false);

  const frameworks = [
    { value: "qwik", label: "Qwik" },
    { value: "react", label: "React" },
    { value: "solid", label: "Solid" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
  ];

  return (
    <div class="container mx-auto space-y-12 p-8">
      <h1 class="text-4xl font-bold tracking-tight">UI Component Showcase</h1>
      <p class="text-muted-foreground text-lg">
        A gallery of all available UI components.
      </p>

      {/* Accordion */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Accordion</h2>
        <Accordion.Root class="w-full">
          <Accordion.Item>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that match the other components'
              aesthetic.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      {/* Alert */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Alert</h2>
        <Alert.Root>
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>
            You can add components to your app using the CLI.
          </Alert.Description>
        </Alert.Root>
      </div>

      {/* Avatar */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Avatar</h2>
        <Avatar.Root>
          <Avatar.Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="user avatar"
          />
          <Avatar.Fallback>QW</Avatar.Fallback>
        </Avatar.Root>
      </div>

      {/* Badge */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Badge</h2>
        <div class="flex items-center gap-4">
          <Badge>Default</Badge>
          <Badge class={badgeVariants({ look: "secondary" })}>Secondary</Badge>
          <Badge class={badgeVariants({ look: "alert" })}>Alert</Badge>
          <Badge class={badgeVariants({ look: "outline" })}>Outline</Badge>
        </div>
      </div>

      {/* Breadcrumb */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Breadcrumb</h2>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Components</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      {/* Button */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Button</h2>
        <div class="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button class={buttonVariants({ look: "secondary" })}>
            Secondary
          </Button>
          <Button class={buttonVariants({ look: "alert" })}>Alert</Button>
          <Button class={buttonVariants({ look: "outline" })}>Outline</Button>
          <Button class={buttonVariants({ look: "ghost" })}>Ghost</Button>
          <Button class={buttonVariants({ look: "link" })}>Link</Button>
        </div>
      </div>

      {/* Card */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Card</h2>
        <Card.Root class="max-w-sm">
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Card Content</p>
          </Card.Content>
          <Card.Footer>
            <p>Card Footer</p>
          </Card.Footer>
        </Card.Root>
      </div>

      {/* Carousel */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Carousel</h2>
        <Carousel.Root class="w-full max-w-xs">
          <Carousel.Scroller>
            {Array.from({ length: 5 }).map((_, index) => (
              <Carousel.Slide key={index}>
                <div class="p-1">
                  <Card.Root>
                    <Card.Content class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{index + 1}</span>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
          <Carousel.Previous />
          <Carousel.Next />
        </Carousel.Root>
      </div>

      {/* Checkbox */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Checkbox</h2>
        <div class="flex items-center space-x-2">
          <Checkbox id="showcase-checkbox" bind:checked={checked} />
          <Label for="showcase-checkbox">This is a checkbox.</Label>
        </div>
      </div>

      {/* Collapsible */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Collapsible</h2>
        <Collapsible.Root class="w-full max-w-sm">
          <Collapsible.Trigger>Click to expand</Collapsible.Trigger>
          <Collapsible.Content>
            <p class="bg-muted mt-2 rounded-md p-4">
              This is the collapsible content.
            </p>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      {/* Combobox */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Combobox</h2>
        <Combobox.Root class="w-52" options={frameworks}>
          <Combobox.Label>Framework</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.Trigger>
              <LuChevronDown />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Popover>
            <Combobox.Empty>No frameworks found.</Combobox.Empty>
          </Combobox.Popover>
        </Combobox.Root>
      </div>

      {/* Dropdown */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Dropdown</h2>
        <Dropdown.Root>
          <Dropdown.Trigger>Open</Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Popover>
        </Dropdown.Root>
      </div>

      {/* Input */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Input</h2>
        <Input placeholder="This is an input field." class="max-w-sm" />
      </div>

      {/* Label */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Label</h2>
        <Label for="labeled-input">This is a label.</Label>
      </div>

      {/* Modal */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Modal</h2>
        <Button onClick$={() => (isModalVisible.value = true)}>
          Open Modal
        </Button>
        <Modal.Root bind:show={isModalVisible}>
          <Modal.Panel>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>This is a modal description.</Modal.Description>
            <Button onClick$={() => (isModalVisible.value = false)}>
              Close
            </Button>
          </Modal.Panel>
        </Modal.Root>
      </div>

      {/* Popover */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Popover</h2>
        <Popover.Root bind:isOpen={isPopoverOpen}>
          <Popover.Trigger>Toggle Popover</Popover.Trigger>
          <Popover.Panel>
            <p class="p-4">This is the popover content.</p>
          </Popover.Panel>
        </Popover.Root>
      </div>

      {/* Progress */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Progress</h2>
        <Progress value={66} class="w-1/2" />
      </div>

      {/* RadioGroup */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Radio Group</h2>
        <RadioGroup.Root>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="1" id="radio-1" />
            <Label for="radio-1">Option 1</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="2" id="radio-2" />
            <Label for="radio-2">Option 2</Label>
          </div>
        </RadioGroup.Root>
      </div>

      {/* Select */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Select</h2>
        <Select.Root>
          <Select.Label>Select a fruit</Select.Label>
          <Select.Trigger>
            <Select.DisplayValue placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Popover>
            <Select.Item value="apple">
              <Select.ItemLabel>Apple</Select.ItemLabel>
            </Select.Item>
            <Select.Item value="banana">
              <Select.ItemLabel>Banana</Select.ItemLabel>
            </Select.Item>
          </Select.Popover>
        </Select.Root>
      </div>

      {/* Separator */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Separator</h2>
        <div>
          <p>Some text above the separator.</p>
          <Separator class="my-4" />
          <p>Some text below the separator.</p>
        </div>
      </div>

      {/* Skeleton */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Skeleton</h2>
        <div class="flex items-center space-x-4">
          <Skeleton class="h-12 w-12 rounded-full" />
          <div class="space-y-2">
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Tabs</h2>
        <Tabs.Root>
          <Tabs.List>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel>Content for Tab 1</Tabs.Panel>
          <Tabs.Panel>Content for Tab 2</Tabs.Panel>
        </Tabs.Root>
      </div>

      {/* Textarea */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Textarea</h2>
        <Textarea placeholder="This is a textarea." class="max-w-sm" />
      </div>

      {/* Toggle & Toggle Group */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Toggle & Toggle Group</h2>
        <div class="flex gap-4">
          <Toggle>Toggle Me</Toggle>
          <ToggleGroup.Root>
            <ToggleGroup.Item value="1">1</ToggleGroup.Item>
            <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
      </div>

      {/* Tooltip */}
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Tooltip</h2>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover over me</Tooltip.Trigger>
          <Tooltip.Panel>I am a tooltip!</Tooltip.Panel>
        </Tooltip.Root>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik UI Component Showcase",
  meta: [
    {
      name: "description",
      content: "A showcase of all installed Qwik UI components.",
    },
  ],
};
