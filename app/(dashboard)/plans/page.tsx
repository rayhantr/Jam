import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Breadcrumbs,
  Paper,
} from '@mui/material'
import {
  Check,
  Close,
  Star,
  CreditCard,
} from '@mui/icons-material'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plans & Pricing',
  description: 'Choose the perfect plan for your freelancing needs',
}

// Types
interface PlanBenefit {
  name: string
  access: boolean
}

interface PricingPlan {
  category: string
  price: string
  days: string
  benefits: PlanBenefit[]
  popular?: boolean
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card 
      elevation={plan.popular ? 4 : 1}
      sx={{ 
        height: '100%',
        position: 'relative',
        border: plan.popular ? 2 : 0,
        borderColor: plan.popular ? 'primary.main' : 'transparent',
      }}
    >
      {plan.popular && (
        <Chip
          label="Most Popular"
          color="primary"
          icon={<Star />}
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />
      )}
      
      <CardHeader
        title={plan.category}
        titleTypographyProps={{ 
          variant: 'h5', 
          align: 'center',
          fontWeight: 'bold' 
        }}
        sx={{ pb: 1 }}
      />
      
      <CardContent sx={{ pt: 0 }}>
        {/* Price */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h3" component="div" fontWeight="bold" color="primary">
            ${plan.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            per {plan.days} days
          </Typography>
        </Box>

        {/* Benefits */}
        <List dense sx={{ mb: 3 }}>
          {plan.benefits.map((benefit, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                {benefit.access ? (
                  <Check color="success" fontSize="small" />
                ) : (
                  <Close color="error" fontSize="small" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={benefit.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: benefit.access ? 'text.primary' : 'text.secondary',
                  sx: { textDecoration: benefit.access ? 'none' : 'line-through' }
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Action Button */}
        <Button
          variant={plan.popular ? 'contained' : 'outlined'}
          fullWidth
          size="large"
          startIcon={<CreditCard />}
        >
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  )
}

function TransactionHistory() {
  return (
    <Card elevation={1}>
      <CardHeader 
        title="Transaction History" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
            color: 'text.secondary',
          }}
        >
          <Typography variant="body1">
            No transactions yet
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default function PlansPage() {
  const pricingPlans: PricingPlan[] = [
    {
      category: 'Basic',
      price: '4.99',
      days: '15',
      benefits: [
        { name: '100 MB Storage Limit', access: true },
        { name: '10 Users Limit', access: true },
        { name: '5 Project Limit', access: true },
        { name: '10 Group Limit', access: true },
        { name: 'GPS Tracking', access: true },
        { name: 'Screenshot Capture', access: true },
        { name: 'Multi Admin Accessible Project', access: false },
        { name: 'Mail Activity', access: false },
      ],
    },
    {
      category: 'Standard',
      price: '9.99',
      days: '15',
      popular: true,
      benefits: [
        { name: '200 MB Storage Limit', access: true },
        { name: '15 Users Limit', access: true },
        { name: '10 Project Limit', access: true },
        { name: '15 Group Limit', access: true },
        { name: 'GPS Tracking', access: true },
        { name: 'Screenshot Capture', access: true },
        { name: 'Multi Admin Accessible Project', access: false },
        { name: 'Mail Activity', access: false },
      ],
    },
    {
      category: 'Pro',
      price: '14.99',
      days: '15',
      benefits: [
        { name: '300 MB Storage Limit', access: true },
        { name: '20 Users Limit', access: true },
        { name: '15 Project Limit', access: true },
        { name: '20 Group Limit', access: true },
        { name: 'GPS Tracking', access: true },
        { name: 'Screenshot Capture', access: true },
        { name: 'Multi Admin Accessible Project', access: true },
        { name: 'Mail Activity', access: false },
      ],
    },
    {
      category: 'Enterprise',
      price: '24.99',
      days: '30',
      benefits: [
        { name: 'Unlimited Storage', access: true },
        { name: 'Unlimited Users', access: true },
        { name: 'Unlimited Projects', access: true },
        { name: 'Unlimited Groups', access: true },
        { name: 'GPS Tracking', access: true },
        { name: 'Screenshot Capture', access: true },
        { name: 'Multi Admin Accessible Project', access: true },
        { name: 'Mail Activity', access: true },
      ],
    },
  ]

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Plans & Pricing
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="text.primary">User</Typography>
          </Link>
          <Typography color="text.secondary">Plans</Typography>
        </Breadcrumbs>
      </Box>

      {/* Current Plan Info */}
      <Paper elevation={1} sx={{ p: 3, mb: 4, backgroundColor: 'primary.50' }}>
        <Typography variant="h6" gutterBottom>
          Current Plan: <strong>Free</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Upgrade to unlock more features and increase your limits
        </Typography>
      </Paper>

      {/* Pricing Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {pricingPlans.map((plan) => (
          <Grid item xs={12} sm={6} lg={3} key={plan.category}>
            <PricingCard plan={plan} />
          </Grid>
        ))}
      </Grid>

      {/* Transaction History */}
      <Grid container>
        <Grid item xs={12}>
          <TransactionHistory />
        </Grid>
      </Grid>
    </Box>
  )
}

