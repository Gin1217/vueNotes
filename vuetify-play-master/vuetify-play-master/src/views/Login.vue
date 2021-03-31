<template>
  <v-app class="bg">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" class="login-form" elevation="12">
          <v-col cols="12" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field id="name" label="Name" name="name" type="text" />
                  <v-text-field id="password" label="Password" name="password" type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary mr-6" @click="$router.push('/')">Login</v-btn>
                <v-btn color="cyan mr-6" dark>Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <div class="mask"></div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url('../assets/img/bg1.jpg');
  background-size: 100% 100%;
  // opacity: 0.8;
  .login-form {
    z-index: 100;
  }
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  opacity: 0.7;
}
</style>
